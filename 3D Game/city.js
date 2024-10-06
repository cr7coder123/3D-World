AFRAME.registerComponent("buildings",{
    schema:{
        height:{type:"number",default:1},
        width:{type:"number", default:1},
        depth:{type:"number", default:1}
    },
    init:function(){
        //setting differnt x,z values for buildings
        var px=[-35,35, -30, -30, 40, 30, -40, 30, 60, 45, 60]
        var pz=[20, -20, -30, 30, 50, 30, 50, -50, 40, 60, -70]
        var ht=[50, 60, 90, 100, 75, 100, 80, 70, 65, 95, 60]
        for (var i =0; i<11; i++){
            console.log(px[i])
            var buildings=document.createElement("a-entity")
            buildings.setAttribute("position",{x:px[i], y:25, z:pz[i]})
            buildings.setAttribute("id", "building"+i+1)
            buildings.setAttribute("geometry",{
                primitive:"box", 
                height:ht[i],
                width:10,
                depth:10
            })
            buildings.setAttribute("material",{
                src:"building.png"
            })
            var sceneel=document.querySelector("#scene")
            sceneel.appendChild(buildings)
        }
    }
})
