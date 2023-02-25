
import Nobunaga from "../Images/Nobunaga.JPG"


function Members() {
    return(
        
        <ul class="list-group">
            <br></br>
            <br></br>
        <li class="list-group-item active" aria-current="true">0
        <br></br>
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/tstgeuk8kr8n9i2ryq9r"  alt="..."/>
        </li>
        <li class="list-group-item">Name: Justin Yuan</li>
        <li class="list-group-item">Info: Justin Yuan is CEO of Moonton Games, best known for "Mobile Legends: Bang Bang." China's ByteDance bought Moonton for approximately $4 billion in 2021.</li>

        <br></br>
        <br></br>

        <li class="list-group-item active" aria-current="true">1
        <br></br>
        <img src={Nobunaga}  alt="..."/>
        </li>
        <li class="list-group-item">Name:Mohammad Azharuddin</li>
        <li class="list-group-item">Info: Mohammad Azharuddin (born 8 February 1963) is an Indian politician and a former international cricketer and former captain of India national cricket team. He is the working president of the Telangana Pradesh Congress Committee and was the member of parliament for Moradabad</li>

        <br></br>
        <br></br>

      </ul>
       
       
    )
}

export default Members;