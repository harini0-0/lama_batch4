import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingComponent(){
    return (
        <div className="App" style={{display:"flex", flexDirection:"row"}}>
            {/* <Button variant="secondary" disabled> */}
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      {/* </Button> */}
        </div>
    );
}