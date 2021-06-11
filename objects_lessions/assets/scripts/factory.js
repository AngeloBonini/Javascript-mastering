function creatMicrophone(color = "purple"){
    let isOn = true;
return {
    color,
    isOn,

    toggleOnOff: ()=> {
        (isOn)? console.log("shut down"): console.log("turn on");
        isOn = !isOn
    }
}
}

const microfoneRed = creatMicrophone();
const microfoneWhite = creatMicrophone("RED");
console.log(microfoneRed.color);
console.log(microfoneWhite.color);