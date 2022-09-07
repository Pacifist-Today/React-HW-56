function Item(props) {
    const {task, onRemove} = props
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <button id = {"col-id " + task.id} type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
                </div>
                <div className="col">{task.name}</div>
            </div>
            <hr/>
        </div>
    )
}

export default Item