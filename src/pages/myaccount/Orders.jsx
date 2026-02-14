export default function Orders() {
  return (
    <div className="myaccount-content">
      <h3>Orders</h3>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="thead-light">
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Aug 22, 2022</td>
              <td>Pending</td>
              <td>$3000</td>
              <td>
                <a href="/cart" className="btn btn-dark btn-sm">
                  View
                </a>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>July 22, 2022</td>
              <td>Approved</td>
              <td>$200</td>
              <td>
                <a href="/cart" className="btn btn-dark btn-sm">
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
