
import BreadcrumbImage from '../../../public/assets/img/breadcrumb/01.jpg'
const TuitionFee = () => {
    return ( 
        <main className="main">

            {/* breadcrumb */}
            <div className="site-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbImage})` }}>
                <div className="container">
                    <h2 className="breadcrumb-title">Tuition Fees</h2>
                    <ul className="breadcrumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Tuition Fees</li>
                    </ul>
                </div>
            </div>
            {/* breadcrumb end */}


            {/* tuition fee */}
            <div className="tuition-fee py-120">
                <div className="container">
                    <div className="tuition-wrap">
                    <div className="mb-2">
                        <h3 className="mb-3">What Our Tuition Fees</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                    <div className="tuition-fee-table">
                        <h4 className="my-4">Faculty of Science and Information Technology</h4>
                        <div className="table-responsive">
                            <table className="table table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">Fees Type</th>
                                        <th scope="col">Credit</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Semester</th>
                                        <th scope="col">Admission Fee</th>
                                        <th scope="col">Other Fees</th>
                                        <th scope="col">Total Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Domestic</td>
                                        <td>60</td>
                                        <td>4 Years</td>
                                        <td>4 Months</td>
                                        <td>$2,000</td>
                                        <td>$5,000</td>
                                        <td>$25,000</td>
                                    </tr>
                                    <tr>
                                        <td>International</td>
                                        <td>70</td>
                                        <td>4 Years</td>
                                        <td>4 Months</td>
                                        <td>$5,000</td>
                                        <td>$15,000</td>
                                        <td>$50,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="my-4">Master Of Business Administration</h4>
                        <div className="table-responsive">
                            <table className="table table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">Fees Type</th>
                                        <th scope="col">Credit</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Semester</th>
                                        <th scope="col">Admission Fee</th>
                                        <th scope="col">Other Fees</th>
                                        <th scope="col">Total Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Domestic</td>
                                        <td>60</td>
                                        <td>1-2 Years</td>
                                        <td>4 Months</td>
                                        <td>$2,000</td>
                                        <td>$5,000</td>
                                        <td>$25,000</td>
                                    </tr>
                                    <tr>
                                        <td>International</td>
                                        <td>70</td>
                                        <td>1-2 Years</td>
                                        <td>4 Months</td>
                                        <td>$5,000</td>
                                        <td>$15,000</td>
                                        <td>$50,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-4 mb-2">
                        <h3 className="mb-3">Download Our All Program Tution Fees</h3>
                        <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat ighteous indignation and dislike men who are so beguiled and demoralized.</p>
                        <a href="#" className="theme-btn mt-4"><span className="far fa-file-pdf"></span> Download Now</a>
                    </div>
                    </div>
                </div>
            </div>
            {/* tuition fee end */}

        </main>
    )
}
export default TuitionFee