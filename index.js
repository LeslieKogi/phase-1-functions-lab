/* calculating Blocks*/
function distanceFromHqInBlocks(pickUpLocation){
let distance= pickUpLocation-=42
let distance2=Math.abs(distance)
return distance2
}
console.log(distanceFromHqInBlocks(50))

/* distance in feet */
function distanceFromHqInFeet(block) {
  let feet= distanceFromHqInBlocks(block)

return (feet*264)
}
console.log(distanceFromHqInFeet (8))

/* distance travelled in feet */

function distanceTravelledInFeet(start,destination){
    let dist= destination-=start
    let m=dist*264
    return Math.abs(m)
}
console.log(distanceTravelledInFeet(34,38))

/* Fare price */
function calculatesFarePrice(start, destination) {
    let feet= Math.abs((destination-start)*264)
    if(feet<=400){
       return 0
    }
    else if (feet>400 && feet <2000){
       let r= feet-=400
        let fare= 0.02*r
        return fare
    }
    else if(feet<2500){
        return 25
    }
    else{
        return `cannot travel that far`
    }
}
console.log(calculatesFarePrice(34,40))


