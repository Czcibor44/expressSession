import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CreateArticle from "./components/create-article.component";
import EditArticle from "./components/edit-article.component";
import ArticleTableRow from "./components/articleTableRow";
import ArticleList from "./components/article-list.component";

import {NavbarBrand} from "react-bootstrap";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-article"} className="nav-link">
                React MERN stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-article"} className="nav-link">
                    Create Article
                </Link>
              </Nav>
            </Nav>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/article-list"} className="nav-link">
                  Article List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                  <Route exact path='/' component={CreateArticle} />
                  <Route path="/create-article" component={CreateArticle} />
                  <Route path="/edit-article/:id" component={EditArticle} />
                  <Route path="/article-list" component={ArticleList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;