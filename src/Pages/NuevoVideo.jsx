/* eslint-disable react/prop-types */
import Formulario from "../Components/Formulario"

function NuevoVideo (props) {
    return(
        <>
        <Formulario addVideo={props.addVideo} />
        </>
    )
}

export default NuevoVideo