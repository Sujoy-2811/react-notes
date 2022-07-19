const ListItem = (prop)=>{

    return <h1 onClick={ ()=>{prop.deleteHandle(prop.val)}}>
        {prop.val}
    </h1>
    
 }

 export default  ListItem