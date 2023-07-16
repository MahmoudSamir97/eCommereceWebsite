import { Component } from "react";
export default class Customers extends Component {
    state = {
        pageTitle: "Customer",
        no: 5,
        customers: [
            {id:1, name: "Scott", phone: "123-456", address:{city:"Giza"}, photo: "https://picsum.photos/id/1010/60"},
            {id:2, name: "Jones", phone: "982-454", address:{city:"Mansoura"}, photo: "https://picsum.photos/id/1011/60"},
            {id:3, name: "Allen", phone: "666-254", address:{city:"Alexandria"}, photo: "https://picsum.photos/id/1012/60"},
            {id:4, name: "James", phone: null, address:{city:"Aswan"}, photo: "https://picsum.photos/id/1013/60"},
            {id:5, name: "John",  phone: null, address:{city:"Luxor"}, photo: "https://picsum.photos/id/1014/60"}
        ] 
    }
    render(){
        return (
            <main className="container-fluid">
                <h4 className="border-bottom m-3 p-1">{this.state.pageTitle}
                    <span className="badge bg-secondary m-2">{this.state.no}</span>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>photo</th>
                        <th>Customer name</th>
                        <th>Phone</th>
                        <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.customerRow()}
                    </tbody>
                </table>
            </main>
        ) 
    } 

    phoneRender(data){
        return(
            data.phone ? data.phone : <div className="text-center text-white bg-warning p-2">No phone</div>
        )
    }
    changePictureHandler = (data, num)=>{
        let custArray = this.state.customers;
        custArray[num].photo = "https://picsum.photos/id/1013/60"

        this.setState({customers: custArray});

    }

    customerRow = ()=>{
      return(
          this.state.customers.map( (cust, index) =>{
              return(
                  <tr key={cust.id}>
                      <td>{cust.id}</td>
                      <td>
                         <img src={cust.photo}/>
                         <div>
                            <button className="btn btn-sm btn-secondary py-1" onClick={()=> this.changePictureHandler(cust, index)}>Change picture</button>
                         </div>
                      </td>
                      <td>{cust.name}</td>
                      <td>{this.phoneRender(cust)}</td>
                      <td>{cust.address.city}</td>
                  </tr>
              )})
        )};

    }

