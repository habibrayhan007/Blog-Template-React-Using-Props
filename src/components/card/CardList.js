import React, { useState } from 'react'
import SingleCard from './SingleCard';
import CardDetails from './CardDetails';
import { Button } from '@mui/material';


const details = [
    {
        "id": 1,
        "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/beautiful-1868656-1024x469-1.jpg",
        "category": "Hoverbic",
        "title": "The worlds most popular fashion blogger",
        "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
    },
    {
        "id": 2,
        "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/rg2.jpg",
        "category": "Fashion",
        "title": "Brand New Fashion Line for 2018",
        "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
    },
    {
        "id": 3,
        "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/gh2.jpg",
        "category": "Fashion",
        "title": "Budget Friendly Fashion Bloggers",
        "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
    },
    {
        "id": 4,
        "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/Become-a-Successful-Fashion-Designer.jpg",
        "category": "Fashion",
        "title": "How to Become a Successful Fashion Designer",
        "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
    },
    {
        "id": 5,
        "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/How-to-Be-a-Good-Friend.jpg",
        "category": "Lifestyle",
        "title": "How to Be a Good Friend on Social Media",
        "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
    },
    {
        "id": 6,
        "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/Tasty-Things-With-Chef-Charlie-1.jpg",
        "category": "Food Restaurant",
        "title": "Let’s Cook Some Tasty Things With Chef Charlie",
        "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
    }
]

const CardList = () => {

    const [seeDetails, setDetails] = useState(null);
    console.log('seeDetails', seeDetails)

    return (
        <div>
            {
                !seeDetails &&
                <div className='card-container'>
                    <div className='card-list'>
                        {
                            details.map(card => <SingleCard key={card.id} card={card} setDetails={setDetails} />)
                        }
                    </div>
                </div>
            }
            {
                seeDetails &&
                <CardDetails carddetails={seeDetails} setDetails={setDetails} />
            }
        </div>
    )
}

export default CardList;