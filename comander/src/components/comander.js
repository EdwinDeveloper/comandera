import load from '../models/loadExample'

function comander(props){
    return <div>
        {
            load.business.map( element => {
                {console.log(element.name)}
                return <div
                 style= {
                {
                    color: "black",
                    height: '100%',
                    width: '100%',
                    backgroundColor: "red",
                    alignItems: "center",
                    alignContent: "center"
                }
            }
                 >{element.name}</div>
            } )
        }
        </div>
}

export default comander