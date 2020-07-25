import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Header from '../header/Header';
import '../sidebar/Sidebar.css'

const Table = props => {


    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Header />
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus quae ipsum mollitia animi odio sunt. Repellendus ut magni accusamus obcaecati officiis tempora consequuntur eligendi omnis culpa vitae voluptatum, temporibus expedita exercitationem illum in, sint maiores voluptatibus ab similique magnam dolores velit non! Saepe, tenetur beatae similique laboriosam unde officia asperiores quia officiis perspiciatis quaerat ratione sapiente earum, hic dolorum omnis sit necessitatibus aliquid? Omnis ex, obcaecati deserunt doloribus doloremque ipsum reiciendis sit consequatur in, veritatis voluptatem vitae voluptatibus iure laborum. Amet rerum inventore incidunt id quis voluptate saepe repudiandae voluptatum dolor iste consectetur molestiae minus perspiciatis, veritatis accusamus pariatur repellendus provident tempora quod quo, nesciunt asperiores. Voluptate officiis culpa aspernatur minima eveniet, exercitationem hic eaque, debitis blanditiis vero nihil, quis rerum? Nam omnis quas tempore voluptate itaque libero dolore odio nihil rerum sint, ducimus quasi ut quidem corrupti delectus autem accusantium nemo. Est, quam quaerat magnam earum reprehenderit voluptatum debitis facere laboriosam autem saepe? Id dolorum, beatae, magnam nostrum enim deserunt ipsum aperiam repudiandae, totam error adipisci accusamus culpa iste minima voluptatum corporis veritatis amet similique et corrupti maiores aliquam perferendis quibusdam doloremque. Expedita magni ducimus amet iure. Dolores iusto odio quaerat non autem, sequi commodi voluptates dolorum ratione culpa. Inventore iste aut nesciunt suscipit magni rem, accusamus, corrupti accusantium quaerat temporibus velit perferendis dignissimos. Cum nam repudiandae quaerat id numquam adipisci ullam laborum voluptatem esse asperiores possimus sint aut, ducimus officiis vitae similique non porro nobis odio perferendis quae, quam sit et illum. Repudiandae sed, qui quasi et necessitatibus cupiditate exercitationem officia ipsa esse accusantium facilis cum voluptatem quae officiis ratione voluptatibus iusto enim laborum, consequatur nihil adipisci ea illum voluptatum fuga. Tempore impedit vero soluta harum, facere fugit ad, perferendis ipsum recusandae aliquam hic quas non vel libero ipsam voluptatibus iure fugiat molestiae accusantium illo qui beatae voluptatem. Nostrum ducimus laboriosam ipsa reprehenderit quisquam doloremque, minima quasi possimus repellendus consequatur deleniti suscipit, dicta, incidunt iste. Cumque provident reprehenderit, expedita vero magnam nesciunt hic ad laborum voluptas quaerat rerum consectetur ea tenetur voluptatem necessitatibus commodi ratione quod blanditiis fugiat et recusandae, iure omnis porro? Eius, quia ex! Repellendus doloribus quibusdam reprehenderit incidunt eius alias corrupti, neque atque voluptatibus, cum provident similique. Sequi voluptatum veniam dolore! Perspiciatis amet ab corporis sint nemo a maiores necessitatibus libero! Quisquam nisi quibusdam voluptatum, asperiores cumque cum provident inventore explicabo. Minus quod eaque rem architecto quasi neque cupiditate facilis cumque consequuntur! Accusamus, eaque?</h3>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Table