const ids = new Set(['Hi','from','Campinas']);
ids.add(2)
console.log(ids.has(2));
if(ids.has('Hi')){
    ids.delete('Hi')
}
for (entry of ids.entries()){
    console.log(entry);
}