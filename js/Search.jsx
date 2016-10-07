const React = require('react')
const ShowCard = require('./ShowArtist')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <div className='shows'>
          {data.artists.map((artist) => (
              <ShowCard show={artist} />
      ))}
    </div>
  </div>
)

module.exports = Search

/*// var container = $('.container');

// $('.browse-all').click(function() {
//     $.ajax({
//         method: "GET",
//         url: "https://api.spotify.com/v1/search?query=usher&offset=0&limit=20&type=artist",
//         dataType: "json",
//         success: function(data) {
//             $.each(data, function(index, item) {
//                 $.each(item, function(key, value) {
//                     container.append(key + ':' + value + '</br>')
//                 });
//               console.log('fucks');
//                 container.append('<br/></br>')
//                 console.log(data);
//             })
//         }
//     });
// })


    //  <div className='artist'>
     // <img src={`public/img.posters`}


// 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type=artist'

// https://api.spotify.com/v1/search?query=usher&offset=0&limit=20&type=artist
*/
