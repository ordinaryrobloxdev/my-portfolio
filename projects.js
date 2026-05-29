const projectData = [
    {
        title: "Modular Data Service",
        description: "safely handles backend data saving and loading with an automatic 3-attempt retry loop and task.wait(5) delays. utilizes generic session locking via UpdateAsync to prevent data loss or server write contention during unexpected crashes.",
        tags: ["Luau", "Backend"]
    }
];

export function renderProjects(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = '';

    projectData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        projectItem.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <div class="tag-group">${tagsHTML}</div>
            </div>
            <p>${project.description}</p>
        `;

        container.appendChild(projectItem);
    });
}