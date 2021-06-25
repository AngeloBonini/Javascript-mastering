class Tooltip{

}

class ProjectItem {}

class ProjectList {

    constructor(type){
        const projectsItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(projectsItems);
    }
}

class App {
    static init(){
        const activeProjectList= new ProjectList('active')
        const finishedProjectList= new ProjectList('finished')
    }
}

App.init();