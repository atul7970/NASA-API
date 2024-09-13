const launches = new Map();

let latestFLightNumber= 100;

const launch ={
    flightNumber:100, 
    mission:'Keppler Exploration X',
    rocket:'Explorer IS1',
    launchDate : new Date('December 27, 2030'),
    target:'Kepler-442 b',
    customer :['ZTM', 'NASA'],
    upcoming: true,
    success:true,
};  

launches.set(launch.flightNumber , launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFLightNumber++;
    launches.set(latestFLightNumber,Object.assign(launch,{
        success:true,
        upcoming:true,
        customers:['Cloud Computing Cell','NASA'],
        flightNumber:latestFLightNumber,
    })
);
}

module.exports={
    getAllLaunches,
    addNewLaunch,
}