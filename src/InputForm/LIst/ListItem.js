import './ListItem.css'

const ListItem = (prop)=>{

    return <div className='card' onClick={ ()=>{prop.deleteHandle(prop.val)}}>
        <h2>{prop.val.title}</h2>
        <span>{prop.val.note}</span>
    </div>
    
 }

 export default  ListItem