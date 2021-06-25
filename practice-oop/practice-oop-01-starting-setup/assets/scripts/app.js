class Tooltip{

}

class ProjectItem {
    cosntructor(id){
        this.id =id;
        this.connectSwitchBtn();
        this.connectInfoBtn();
    }
    connectSwitchBtn(){
        const prjItemEl = document.getElementById(this.id);
        const switchButton = prjItemEl.querySelector('button:last-of-type');
        switchButton.addEventListener('click',);
    }
    connectInfoBtn(){

    }
}

class ProjectList {
    projects= [];
    constructor(type){
        const projectsItems = document.querySelectorAll(`#${type}-projects li`);
        for(const item of projectsItems){
            this.projects.push(new ProjectItem(item.id))
        }
        console.log(this.projects)
    }
    switchProject(projectId){
        this.projects = this.projects.filter(p => p.id !== projectId);
        // const projIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projIndex, 1);
    }

    addProject(){

    }
}

class App {
    static init(){
        const activeProjectList= new ProjectList('active')
        const finishedProjectList= new ProjectList('finished')
    }
}

App.init();