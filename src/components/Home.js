import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import { Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import WhatImage from '../svg_folder/Whatwebsite.svg';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Techno from '../svg_folder/technology.svg'
import monitor from '../svg_folder/monitor.svg';
import leadlist from '../svg_folder/leadlist.svg';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import api from '../svg_folder/Api.svg';
import chrome from '../svg_folder/download.svg'
import automate from '../svg_folder/automate.svg'
import firefox from '../svg_folder/firefox.svg'
import edge from '../svg_folder/edge.svg'
import safari from '../svg_folder/safari.svg'
import hubspot from '../svg_folder/hubspot.svg';
import zapier from '../svg_folder/zapier.svg';
import pipedrive from '../svg_folder/pipedrive.svg';
import integromat from '../svg_folder/integromat.svg';
import pablo from '../svg_folder/pablo.svg';
import gmail from '../svg_folder/gmail.svg';
import android from '../svg_folder/andriod.svg';
import google from '../svg_folder/google.svg';
import oracle from '../svg_folder/oracle.svg';
import amazon from '../svg_folder/amazon.svg';
import ibm from '../svg_folder/ibm.svg';
import paypal from '../svg_folder/paypal.svg';
import ebay from '../svg_folder/ebay.svg';
import shopify from '../svg_folder/shopify.svg';
import stripe from '../svg_folder/stripe.svg';
import sap from '../svg_folder/sap.svg';
import microsoft from '../svg_folder/microsoft.svg';
import salesforce from '../svg_folder/salesforce.svg';
import adobe from '../svg_folder/adobe.svg';
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
                            <img src={leadlist} alt="What Image"/>
                        </div>
                        <div className="col-md-8">
                            <FilterListIcon/><span id="lookup">  LEAD LISTS</span>
                            <h2><b>Create lists of websites and contacts</b></h2>
                            <p>Find prospects by the technologies they use. Lead lists contain websites, company and contact details, social media profiles and more. Create and export custom reports for any web technology or keyword based on industry, website traffic and location.</p>
                            <ul className="chip-lists">
                                <li>List all</li>
                                <li id="chip-item">Fashion</li>
                               <li> websites that use</li>
                                <li id="chip-item">Shopify</li>
                                <li>in </li>
                                <li id="chip-item">United States</li>
                                <li>with</li>
                                <li id="chip-item">high traffic</li>
                            </ul>
                            <Button id="create-lead"><b>Create a lead list </b><ArrowRightAltIcon/></Button><br></br><br></br>
                            <span id="lookup">HIGHLIGHTS</span><br></br><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Millions of companies tracked globally</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Organic data with traffic markers</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Fresh and accurate data</span><br></br>
                        </div>
                        
                    </div>
                </div>
                <hr></hr>
                <div className="second-section">
                    <div className="row">
                        <div className="col-md-8">
                            <img id="techno" src={api} alt="tech"/><span id="lookup">APIS</span>
                            <h2><b>Automate technology lookups</b></h2>
                            <p>The Wappalyzer APIs provide instant access to website technology stacks, company and contact details, social media profiles and more. Track your prospects' technology choices, examine large numbers of websites or enrich your own datasets with technographic insights.</p>
                            <Button id="create-lead"><b>Compare APIs</b><ArrowRightAltIcon/></Button><Button id="api-btn"><b>API reference</b><ImportContactsIcon/></Button><br></br><br></br>
                            <span id="lookup">HIGHLIGHTS</span><br></br><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Split second results</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Analyse websites in real-time</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Free trial</span><br></br>
                        </div>
                        <div className="col-md-4">
                            <img src={automate} alt="What Image"/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="second-section">
                    <div className="row">
                    <div className="col-md-4">
                            <img src={monitor} alt="What Image"/>
                        </div>
                        <div className="col-md-8">
                            <NotificationsNoneIcon/><span id="lookup">WEBSITE ALERTS</span>
                            <h2><b>Monitor your competitors' websites</b></h2>
                            <p>Get notified when a website's technology stack changes. Be the first to know when a competitor moves to a new CMS, ecommerce platform or any other technology.</p>
                            <Button id="create-lead"><b>Create an alert</b><ArrowRightAltIcon/></Button><br></br><br></br>
                            <span id="lookup">HIGHLIGHTS</span><br></br><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Same-day notifications</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Create up to 500 alerts</span><br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg><span>Get 5 alerts free</span><br></br>
                        </div>
                        
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="body-content">
                <h3>Apps</h3>
                <p>Wappalyzer works with the tools you use every day.</p>
                <div className="row">
                    <div className="col-md-3 browser">
                        <img src={chrome}/>
                        <h4><b>Chrome</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={firefox}/>
                        <h4><b>Firefox</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={edge}/>
                        <h4><b>Edge</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={safari}/>
                        <h4><b>Safari</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 browser">
                        <img src={hubspot}/>
                        <h4><b>Hubspot</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={pipedrive}/>
                        <h4><b>Pipe drive</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={zapier}/>
                        <h4><b>Zapier</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={integromat}/>
                        <h4><b>Integromat</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 browser">
                        <img src={pablo}/>
                        <h4><b>Pably</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={gmail}/>
                        <h4><b>Gmail</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
                        <img src={android}/>
                        <h4><b>Android</b></h4>
                        <p>See the technologies of websites you visit in your browser.</p>
                    </div>
                    <div className="col-md-3 browser">
        
                    </div>
                </div>
            </div>
            <hr></hr>
            <span id="lookup">WAPPALYZER IS TRUSTED BY THOUSANDS OF PROFESSIONALS WORLD-WIDE</span>
            <ul className="companies">
                <li><img src={google}/></li>
                <li><img src={oracle}/></li>
                <li><img src={amazon}/></li>
                <li><img src={ibm}/></li>
                <li><img src={paypal}/></li>
                <li><img src={ebay}/></li>
                <li><img src={shopify}/></li>
                <li><img src={stripe}/></li>
                <li><img src={sap}/></li>
                <li><img src={microsoft}/></li>
                <li><img src={salesforce}/></li>
                <li><img src={adobe}/></li>
            </ul>
            <div className="profile-cards">
                <div className="row">
                    <div className="col-md-4 profile-card">
                        <img src="https://www.wappalyzer.com/images/testimonials/ilya-grigorik.jpg" />
                        <div className="profile-content">
                            <p><i>"Wappalyzer has proven to be a great tool to help us break down the aggregate analysis of how the web is doing by various technologies."</i></p>
                            <span>Ilya Grigorik<br></br>Principal Engineer at Shopify</span>
                        </div>
                    </div>
                    <div className="col-md-4 profile-card">
                        <img src="https://www.wappalyzer.com/images/testimonials/ilya-grigorik.jpg" />
                        <div className="profile-content">
                            <p><i>"Wappalyzer has proven to be a great tool to help us break down the aggregate analysis of how the web is doing by various technologies."</i></p>
                            <span>Ilya Grigorik<br></br>Principal Engineer at Shopify</span>
                        </div>
                    </div>
                    <div className="col-md-4 profile-card">
                        <img src="https://www.wappalyzer.com/images/testimonials/ilya-grigorik.jpg" />
                        <div className="profile-content">
                            <p><i>"Wappalyzer has proven to be a great tool to help us break down the aggregate analysis of how the web is doing by various technologies."</i></p>
                            <span>Ilya Grigorik<br></br>Principal Engineer at Shopify</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
