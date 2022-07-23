import ListItem from "./ListItem" 
 const List = (prop)=>{

    return <div>
        {
            prop.data.map((item)=>{
                // return <h1 key={item}>{item}</h1>
               return <ListItem  key ={item.title} val ={item} deleteHandle={prop.deleteHandle}/> 
            })
        }
    </div>
 }

 export default List