function getMedian(map, pivo, last){
let index = 0;
const keys = Object.keys(map);

let a =0;
let b=0;
while(p>0){
    const key = keys[index];
    last-=map[key];

    if(1>last){
        a = key;
    }
    if(!b && last < 2){
        b = key;
    }
    if(pivo % 2 === 0){
        return (Number(a)+ Number(b))/2    
    }
    else{
        return a;
    }
}
}

function updateMap(map, length, new_){
    map[length]--;
 if (!map[length]){
     delete map[length];
 }
if(!map[new_]){
    map[new_]=0;
    map[new_]++;
}
return map;
}

function activityNotifications(expenditures, d){
let map = {};
let count = 0;
let newList = [];
const part = (d % 2 === 0)? d/3 : (d+1)/2;
expenditures.slice(0, d).forEach((i)=>{
if(!map[i]){
    map[i]=0;
}
    map[i]++;
})
for(let i = 0; i< expenditures.length- d; i++){
    if(i !== 0){
        map = updateMap(map, expenditures[i-1], expenditures[i+d-1]);
    }
    const m = getMedian(map,d, part);
    const s = expenditures[i+d];
    if(s>=m*2){
        count++;
    }
}
console.log(count);
}

activityNotifications(5,4,[1,2,37,8,13]);
