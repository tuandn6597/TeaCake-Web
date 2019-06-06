import React, { Component } from 'react';
import axios from 'axios';

import { Modal } from 'react-bootstrap';

class BlogContent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            blogs: [],
            blog: [],
            show: false,
            currentBlog:{}

        };

        this.handleHide = () => {
            this.setState({ show: false })
            this.onClearArray()
            console.log(this.state.blog)
        };
    }
    onClearArray = () => {
        this.setState({ blog: [] });
    }
    getBlogs = () => {
        axios.get('/api/blogs')
            .then(result => {
                console.log()
                this.setState({ blogs: result.data })

            })
    }
    componentDidMount() {
        this.getBlogs();
    }
    openBlog = (blog) => {
        this.setState({
             show: true,
             currentBlog:blog
        
        });
    }
    render() {
        return (
            <section className="style-2">
                <div className="container">
               
                    <div className="row">
                        <div className="col-md-12">
                            <h2 id="menu" className="section-heading text-center" style={{ color: '#c49b63' }}>Blog</h2>
                        </div>
                    </div>
             
                    {this.state.blogs.map(prd =>
                        <div className="blog-loop columns masonry" >
                            <article className="col-md-4 col-sm-6">

                                <header className="text-center"><a onClick={() => this.openBlog(prd)} ><img src={prd.imageURL} />
                                    <div className="hover">
                                        <div className="day">22</div>
                                        <div className="month">Mar</div>
                                    </div></a></header>
                                <div className="post-inner">
                                    <h2 style={{ fontWeight: '100', textTransform: 'uppercase', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontSize: '0.7em' }}>{prd.title}</h2>

                                </div>
                            </article>
                        </div>
                    )}
                </div>
                {/* Modal */}
                <Modal id="blogModal" size="lg" show={this.state.show} onHide={this.handleHide} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Body style={{ maxHeight: '700px', overflowY: 'auto' }}>
                        <section className="blog-single">
                            <div className="container">
                                <div className="row">
                                 
                                        <div className="col-md-9">
                                            <article >
                                                <header>
                                                    <h2 style={{ textTransform: 'lowercase' }}>{this.state.currentBlog.title}</h2>
                                                    <a href="#"><img style={{ width: '100%', height: '350px' }} src={this.state.currentBlog.imageURL} alt="Blog post 1" /></a>
                                                    <div className="post-meta">
                                                        <ul>
                                                            <li><i className="fa fa-user" />posted by Admin</li>
                                                            <li><i className="fa fa-calendar-o" />2019</li>
                                                            {/* <li><i className="fa fa-folder-o" /><a href="#">Carrer </a>/ <a href="#">Photography </a>/ <a href="#">Post</a></li> */}
                                                        </ul>
                                                    </div>
                                                </header>
                                                <p>{this.state.currentBlog.content}</p>
                                                <div className="author">
                                                    <div>
                                                        <h4>about author <span className="color">{this.state.currentBlog.author}</span></h4>

                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                 
                                </div>
                            </div>
                        </section>
                    </Modal.Body>
                </Modal>
            </section>

        )

    }
}
export default BlogContent;