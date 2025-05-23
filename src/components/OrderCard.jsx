import PropTypes from 'prop-types';
import DialogConsole from './DialogConsole';
const OrderCard = ({ jsonMeta }) => {

    return (
        <div>
            {jsonMeta && jsonMeta.map((item, index) => {
                const tabId = `tab${index % 3 + 1}`;
                return (
                    <div className="cs-tabs" key={index}>
                        <input
                            className="radiotab"
                            name="tabs"
                            tabIndex={index + 1}
                            type="radio"
                            id={tabId}
                            defaultChecked={index % 3 === 0}
                        />
                        <label className="label" htmlFor={tabId}>Orden de {item.quantity < 0 ? "venta" : "compra"} {index + 1}: {item.ticker}</label>
                        <div className="panel" tabIndex={index + 1}>
                            <h2>Orden de {item.quantity < 0 ? "venta" : "compra"} {index + 1}</h2>
                            <p>Ticker: {item.ticker}</p>
                            <p>Tipo: {item.type}</p>
                            <p>Estado: {item.status}</p>
                            <p>Precio Límite: {item.limitPrice}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Valor: {item.value}</p>
                            <p>Creación: {new Date(item.creationTime).toLocaleDateString()}</p>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button className='cs-btn'>CANCELAR ORDEN DE COMPRA</button>
                                </div>
                                <button className='cs-btn'>QUITAR</button>
                                <DialogConsole />
                            </div>

                        </div>

                    </div>
                );
            })}
        </div>
    );


}
OrderCard.propTypes = {
    jsonMeta: PropTypes.array.isRequired,
};
export default OrderCard;