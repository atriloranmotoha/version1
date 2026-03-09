let currentProject = null;

function init() {
    initializeStorage();
    setupFormListener();
    setupBackButton();
    loadSavedProject();
}

function setupFormListener() {
    const form = document.getElementById('project-form');
    form.addEventListener('submit', handleFormSubmit);
}

function setupBackButton() {
    const backButton = document.getElementById('btn-back');
    backButton.addEventListener('click', goBack);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const projectName = form.projectName.value.trim();
    const projectDescription = form.projectDescription.value.trim();
    const techFields = Array.from(form.querySelectorAll('input[name="techField"]:checked'))
        .map(cb => cb.value);
    const currentSkills = form.currentSkills.value.trim();
    const timeline = form.timeline.value;
    
    if (techFields.length === 0) {
        alert('请至少选择一个技术领域');
        return;
    }
    
    const projectData = {
        projectName,
        projectDescription,
        techFields,
        currentSkills,
        timeline
    };
    
    currentProject = generateLearningPath(projectData);
    saveCurrentProject(currentProject);
    
    showLearningPath(currentProject);
}

function showLearningPath(project) {
    document.getElementById('project-input').classList.add('hidden');
    document.getElementById('learning-path').classList.remove('hidden');
    
    document.getElementById('project-title').textContent = project.name;
    document.getElementById('project-description-display').textContent = project.description;
    
    const skillsHtml = `
        <h4>需要掌握的技能</h4>
        <ul>
            ${project.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
        ${project.currentSkills ? `<p class="current-skills"><strong>已掌握技能：</strong>${project.currentSkills}</p>` : ''}
    `;
    document.getElementById('project-skills').innerHTML = skillsHtml;
    
    renderTimeline(project);
    updateProjectProgress();
}

function renderTimeline(project) {
    const timeline = document.getElementById('timeline');
    const stages = project.stages;
    
    timeline.innerHTML = stages.map((stage, stageIndex) => {
        const stageProgress = getStageProgress(project.id, stageIndex, stage.modules);
        
        return `
            <div class="stage" id="stage-${stageIndex}">
                <div class="stage-header" onclick="toggleStage(${stageIndex})">
                    <h3>${stage.stageName}</h3>
                    <div class="stage-info">
                        <span class="stage-week">${stage.week}</span>
                        <span class="stage-duration">预计${stage.duration}</span>
                        <button class="stage-toggle" id="toggle-${stageIndex}">▼</button>
                    </div>
                </div>
                <div class="stage-content" id="content-${stageIndex}">
                    <div class="stage-goal">
                        <strong>阶段目标：</strong>${stage.stageGoal}
                    </div>
                    <div class="progress-section">
                        <h4>学习进度</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${stageProgress.percentage}%"></div>
                        </div>
                        <p class="progress-text">已完成 ${stageProgress.completed}/${stageProgress.total} 个学习资源 (${stageProgress.percentage}%)</p>
                    </div>
                    <div class="module-list">
                        ${stage.modules.map((module, moduleIndex) => renderModule(module, stageIndex, moduleIndex)).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderModule(module, stageIndex, moduleIndex) {
    return `
        <div class="module">
            <h4>${module.name}</h4>
            <p class="module-goal">${module.goal}</p>
            <div class="resource-list">
                ${module.resources.map((resource, resourceIndex) => 
                    renderResource(resource, stageIndex, moduleIndex, resourceIndex)
                ).join('')}
            </div>
        </div>
    `;
}

function renderResource(resource, stageIndex, moduleIndex, resourceIndex) {
    const isComplete = isResourceComplete(currentProject.id, stageIndex, moduleIndex, resourceIndex);
    const difficultyClass = `difficulty-${resource.difficulty}`;
    const difficultyText = {
        'easy': '入门',
        'medium': '进阶',
        'hard': '高级'
    }[resource.difficulty];
    
    const typeIcon = {
        '文档': '📄',
        '视频': '🎬',
        '教程': '📖',
        '项目': '🔧'
    }[resource.type] || '📚';
    
    return `
        <div class="resource ${isComplete ? 'completed' : ''}">
            <div class="resource-icon">${typeIcon}</div>
            <div class="resource-info">
                <div class="resource-title">
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.title}</a>
                </div>
                <div class="resource-meta">
                    <span class="resource-tag">${resource.type}</span>
                    <span class="resource-tag">${resource.platform}</span>
                    <span class="resource-tag ${difficultyClass}">${difficultyText}</span>
                    <span class="resource-tag">${resource.duration}</span>
                </div>
                <p class="resource-reason">${resource.reason}</p>
                <div class="checklist-item ${isComplete ? 'completed' : ''}" onclick="handleResourceClick(event, ${stageIndex}, ${moduleIndex}, ${resourceIndex})">
                    <input type="checkbox" ${isComplete ? 'checked' : ''} onclick="event.stopPropagation()">
                    <label>标记为已完成</label>
                </div>
            </div>
        </div>
    `;
}

function handleResourceClick(event, stageIndex, moduleIndex, resourceIndex) {
    event.stopPropagation();
    const isComplete = toggleResourceComplete(currentProject.id, stageIndex, moduleIndex, resourceIndex);
    
    const resourceElement = event.currentTarget;
    const checkbox = resourceElement.querySelector('input[type="checkbox"]');
    
    if (isComplete) {
        resourceElement.classList.add('completed');
        checkbox.checked = true;
    } else {
        resourceElement.classList.remove('completed');
        checkbox.checked = false;
    }
    
    updateStageProgress(stageIndex);
    updateProjectProgress();
}

function updateStageProgress(stageIndex) {
    const stages = currentProject.stages;
    const stage = stages[stageIndex];
    const stageProgress = getStageProgress(currentProject.id, stageIndex, stage.modules);
    
    const progressBar = document.querySelector(`#stage-${stageIndex} .progress-fill`);
    const progressText = document.querySelector(`#stage-${stageIndex} .progress-text`);
    
    if (progressBar && progressText) {
        progressBar.style.width = `${stageProgress.percentage}%`;
        progressText.textContent = `已完成 ${stageProgress.completed}/${stageProgress.total} 个学习资源 (${stageProgress.percentage}%)`;
    }
}

function updateProjectProgress() {
    const stages = currentProject.stages;
    const projectProgress = getProjectProgress(currentProject.id, stages);
    
    const progressDiv = document.getElementById('progress-overview');
    
    progressDiv.innerHTML = `
        <h4>总体学习进度</h4>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${projectProgress.percentage}%"></div>
        </div>
        <p class="progress-text">已完成 ${projectProgress.completed}/${projectProgress.total} 个学习资源 (${projectProgress.percentage}%)</p>
    `;
}

function toggleStage(stageIndex) {
    const content = document.getElementById(`content-${stageIndex}`);
    const toggle = document.getElementById(`toggle-${stageIndex}`);
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        toggle.classList.remove('collapsed');
    } else {
        content.classList.add('collapsed');
        toggle.classList.add('collapsed');
    }
}

function goBack() {
    document.getElementById('learning-path').classList.add('hidden');
    document.getElementById('project-input').classList.remove('hidden');
}

function loadSavedProject() {
    const savedProject = getCurrentProject();
    if (savedProject) {
        currentProject = savedProject;
        const shouldRestore = confirm('检测到之前保存的项目"' + savedProject.name + '"，是否继续学习？');
        if (shouldRestore) {
            showLearningPath(savedProject);
        }
    }
}

document.addEventListener('DOMContentLoaded', init);
