class DOMHelper {
    static moveElement(elmId, newDestinationSelector){
const element = document.getElementById(elmId);
const destination = document.querySelector(newDestinationSelector);
destination.append(element);  
    }
}

class Tooltip{

}

class ProjectItem {
    cosntructor(id, updateProjectListFunction){
        this.updateProjectListHandler = updateProjectListFunction;
        this.id =id;
        this.connectSwitchBtn();
        this.connectInfoBtn();
    }
    connectSwitchBtn(){
        const prjItemEl = document.getElementById(this.id);
        const switchButton = prjItemEl.querySelector('button:last-of-type');
        switchButton.addEventListener('click', this.updateProjectListHandler.bind(null, this.id));
    }
    connectInfoBtn(){

    }
}


class ProjectList {
    projects= [];
    constructor(type){
      
        const projectsItems = document.querySelectorAll(`#${type}-projects li`);
        for(const item of projectsItems){
            this.projects.push(new ProjectItem(item.id, this.switchProject.bind(this)))
        }
        console.log(this.projects)
    }
    addProject(project){
        this.projects.push(project);
        DOMHelper.moveElement(project.id ,`#${this.type}-projects ul`);
    }
     
    switchProject(projectId){
        this.switchHandler(this.projects.find(p => p.id === projectId))
        this.projects = this.projects.filter(p => p.id !== projectId);
        // const projIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projIndex, 1);
    }
    setSwitchHandlerFunction( switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

}

class App {
    static init(){
        const activeProjectList= new ProjectList('active')
        const finishedProjectList= new ProjectList('finished')
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList) );
        finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList) );
    }
}

App.init();