import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import { Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import WhatImage from '../Whatwebsite.svg';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Techno from '../technology.svg';
import './home.css'
function Home() {
    return (
        <>
            <header style={{
                background: "#4607ad", color: "#fff",
                padding: "56px 25% 56px 25%"
            }}>
                <h2>Identify technologies on websites</h2>
                <p>Find out the technology stack of any website. Create lists of websites that use certain technologies, with company and contact details. Use our tools for lead generation, market analysis and competitor research.</p>
            </header>
            <div className="body-content">
                <h3>Empower your sales and marketing teams</h3>
                <div className="items">
                    <div className="item">
                        <b>Generate sales leads</b><br></br>
                        <p>Find new prospects by the technologies they use. Reach out to customers of Shopify, Magento, Salesforce and others.</p>
                        <Button><FilterListIcon />Create a list</Button>
                    </div>
                    <div className="item">
                        <b>Enrich your data</b><br></br>
                        <p>Upload a list of websites to get a report of the technologies in use, such as CMS or ecommerce platforms.</p>
                        <Button><InsertDriveFileIcon />Upload a list</Button>
                    </div>
                    <div className="item">
                        <b>Connect to your tools</b><br></br>
                        <p>See the technology stacks of your leads in your browser, CRM, mobile device or email client.</p>
                        <Button><AppsIcon />See all apps</Button>
                    </div>
                </div>
                <div className="second-section">
                    <div className="row">
                        <div className="col-md-8">
                            <img id="techno" src={Techno} alt="tech"/><span id="lookup"> TECHNOLOGY LOOKUP</span>
                            <h2><b>Find out what websites are built with</b></h2>
                            <p>Instantly reveal the technology stack any website, such as CMS, ecommerce platform or payment processor, as well as company and contact details.</p>
                            <FormControl  id="outlined-basic" label="Outlined" variant="outlined">
                                <InputLabel htmlFor="filled-adornment-password" placeholder="Example or example.com">Website Url or company name</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                   
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                              
                                            >
                                                <SearchIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>Or, <a href="#">Upload a list</a><br></br><br></br><br></br>
                            <span id="lookup">HIGHLIGHTS</span><br></br><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Instant results</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>50 Free monthly lookups</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Perform up to 100,000 lookups at once</span><br></br>
                        </div>
                        <div className="col-md-4">
                            <img src={WhatImage} alt="What Image"/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="second-section">
                    <div className="row">
                    <div className="col-md-4">
                            <img src={WhatImage} alt="What Image"/>
                        </div>
                        <div className="col-md-8">
                            <img id="techno" src={Techno} alt="tech"/><span id="lookup"> TECHNOLOGY LOOKUP</span>
                            <h2><b>Find out what websites are built with</b></h2>
                            <p>Instantly reveal the technology stack any website, such as CMS, ecommerce platform or payment processor, as well as company and contact details.</p>
                            <FormControl  id="outlined-basic" label="Outlined" variant="outlined">
                                <InputLabel htmlFor="filled-adornment-password" placeholder="Example or example.com">Website Url or company name</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                   
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                              
                                            >
                                                <SearchIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>Or, <a href="#">Upload a list</a><br></br><br></br><br></br>
                            <span id="lookup">HIGHLIGHTS</span><br></br><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Instant results</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>50 Free monthly lookups</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Perform up to 100,000 lookups at once</span><br></br>
                        </div>
                        
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    )
}

export default Home;
