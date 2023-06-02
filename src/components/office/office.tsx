import "./office.css"
import { equipment } from "../../global/equipment";
import { getImage } from "../../global/global";

const office = ({n,eq} : {n : number,eq : equipment[]}) => {
    return(
    <div className={`office0${n}`}>
                    <button
                        type="button"
                        className=" btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target={"#exampleModal" + n.toString()}
                    >
                        {`Office 0${n}`}
                    </button>

                    <div
                        className="modal fade"
                        id={"exampleModal" + n.toString()}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        data-bs-backdrop="false"
                    >
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-white" id="exampleModalLabel">
                                        {`Office 0${n} equipment inventory`}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ margin: '0 -10px' }}
                                    >
                                    {eq.map(i =>
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
                                            <img
                                                src={getImage(i.type)}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">{i.type}</h6>

                                                <div>
                                                    <ul>
                                                        <li>NUMSER: {i.numser}</li>
                                                        <li>Brand: {i.marque}</li>
                                                        <li>State: {i.etat}</li>
                                                        <li>Purchase date: {i.dateachat}</li>
                                                        <li>user id : {i.user_id}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default office;