import React from "react";
import './Card.css';
import Card from "./Card";

const Finance = () => {
    return(
      <div className="box">
      <Card
      img="childplan.jpg"
      name="Child Plan"
      description="“Teaching is not about answering questions but about raising questions – opening doors for them in places that they could not imagine..."
      button = "View On Child Plan"
      /> 
      
      <Card
            img="oldageplan.jpeg"
            name="Old Age Plan"
            description="The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm. ..."
            button = "View On Oldage Plan"
      />

      <Card
            img="futureplan.jpeg"
            name="Future Plan"
            description="“When you do the things in the present that you can see, you are shaping the future that you are yet to see.” ..."
            button = "View On Future Plan"
      />
   </div>
    )
    
    
}

export default Finance;