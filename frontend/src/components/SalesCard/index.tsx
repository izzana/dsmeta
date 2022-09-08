import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import NotificationButton from '../NotificationButton';
import { useState } from "react";

function SalesCard() {

  //Macete para criar uma data de X dias atrás:

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

                //function que altera meu dado
  const [minDate, setMinDate] = useState(min);//data mínima, dentro do useState estou passando a data de hoje
  const [maxDate, setMAxDate] = useState(max);//data máxima//declarando um estado no react
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
              <div className="dsmeta-form-control-container">
                  <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                  />
              </div>
              <div className="dsmeta-form-control-container">
                  <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMAxDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                  />
              </div>
            </div>
            <div>
              <table className="dsmeta-sales-table">
              <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th> 
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">04/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton /> 
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">04/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">04/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
              </tbody>
              </table> 
            </div>
        </div>
    )
  }
  
  export default SalesCard;
  