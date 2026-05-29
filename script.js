document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabButton');
    const contents = document.querySelectorAll('.tabs');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // remove active class from all buttons and sections
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // add active class to clicked button
            tab.classList.add('active');
            
            // find target section via dataset property and display it
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});