import bugModel from '../Model/bugModel'

export function retrieveBugs(){
    let data = [];
    
    data.push(new bugModel({
        _id:1123123,
        name:"Crashed on Load",
        details:"Crashes after three seconds",
        steps:"Open application and it will crash",
        version:"v2.0",
        assigned:"Sushan Subba",
        creator:"Tom Hanks",
        priority:1,
        time:"22:15",
      
    }))

    data.push(new bugModel({
        _id:1152323,
        name:"Wont Load",
        details:"Crashes after three seconds",
        steps:"Open application and it will crash",
        version:"v2.0",
        assigned:"Prashan Subba",
        creator:"Will Smith",
        priority:3,
        time:"22:15",
      
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority}) //
    return sorted;

}