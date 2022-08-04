import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';

function List(props,data) {
    
    return (
        <div>
            {
                data.map((d,i)=>{
                    return(
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {d.name}
                                </CardTitle>
                                <Button>Delete</Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default List;









