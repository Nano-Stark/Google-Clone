import React, {useState} from 'react';
import './SearchPage.css';
import {useStateValue} from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import {Link} from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles } from '@material-ui/styles';

function SearchPage() {
//STYLING
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    nop: {
      height: '50px',
      width: '50px'
    },
  });
  const classes = useStyles();
//MY CODE TRYING TO IMPLEMENT
const [input, setInput] = useState('');
  const frame = (e) => {
      e.preventDefault();
      setInput(e.target.href);
    console.log(`this link was clicked ${e.target.href} and ${input}`);
  }


  const [{term = 'tesla'}, dispatch] = useStateValue();  
  //LIVE API CALL
  //const { data } = useGoogleSearch(term);

  // MOCK API CALL(local call), response.js
  const data = Response;

// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new
    console.log(data);
  return (
    <div className='searchPage'>
    {/*<div className={`searchPage ${classes.root}`}>*/}

        <div className='searchPage_header'>
            <Link to='/'>
                <img 
                    className='searchPage_logo'
                    src={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
                    alt=""
                    />
            </Link>

            <div className='searchPage_headerBody'>
                <Search hideButtons />

                <div className='searchPage_options'>
                    <div className='searchPage_optionsLeft'>
                        <div className='searchPage_option'>
                            <SearchIcon />
                            <Link to='/all'>All</Link>
                        </div>
                        <div className='searchPage_option'>
                            <DescriptionIcon />
                            <Link to='/news'>News</Link>
                        </div>
                        <div className='searchPage_option'>
                            <ImageIcon />
                            <Link to='/images'>Images</Link>
                        </div>
                        <div className='searchPage_option'>
                            <LocalOfferIcon />
                            <Link to='/shopping'>Shoppng</Link>
                        </div>
                        <div className='searchPage_option'>
                            <RoomIcon />
                            <Link to='/maps'>maps</Link>
                        </div>
                        <div className='searchPage_option'>
                            <MoreVertIcon />
                            <Link to='/all'>more</Link>
                        </div>

                    </div>

                    <div className='searchPage_optionsLeft'>
                        <div className='searchPage_option'>
                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className='searchPage_option'>
                            <Link to='/tools'>Tools</Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

        {true && (
            <div className='searchPage_results'>
                <p className='searchPage_resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    {data?.items[0].displayLink}
                </p>
                {data?.items.map((item, i) => (
                    <div key={i} className='searchPage_result'>
                        <a href={item.link} onClick={frame}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.
                            cse_image[0]?.src && (
                                <img className='searchPage_resultImage'
                                    src={item.pagemap?.cse_image[0]?.src}
                                    alt=''
                                />
                            )}
                            {item.displayLink} &#8711;
                        </a>
                        <h2>
                            <a className='searchPage_resultTitle'
                                href={item.link} onClick={frame}>
                                    {item.title} {/** <h2>{item.title}</h2> doesnot make senses for block
                                     *   element to be inside inline element */}
                            </a>
                        </h2>
                        <p className='searchPage_resultSnippet'>
                            {item.snippet}
                        </p>
                    </div>
                ))}
            </div>
            
        )}

    </div>
  );
}

export default SearchPage;