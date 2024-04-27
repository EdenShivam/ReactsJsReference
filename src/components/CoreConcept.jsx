export default function CoreConcept({image, tittle , description}){
    return (
      <li>        
          <img src={image} alt={tittle} />
          <h3>{tittle}</h3>
          <p>{description}</p>
      </li>
    );
  }