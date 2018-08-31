import { buildCivicQuery } from '../../util/functions';

export default async function(){
  const url = buildCivicQuery([this.state.address, this.state.city, this.state.zipcode]);
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    console.log(resultJson);
    if(!resultJson.error){
      if(!resultJson.offices){
        if(this.state.view==='ADDRESS_NEEDED'){
          this.setState({view: 'WE_FAILED'}, ()=>{
            this.setState({isLoading: false});
          })
        }else{
          this.setState({view: 'ADDRESS_NEEDED'}, () => {
            this.setState({isLoading: false});
          });
        }
      }else{
        const officeName = resultJson.offices[0].name.split(' ');
        const district = officeName[officeName.length-1];
        this.setState({district, view:'DISTRICT_FOUND'}, () => {
          this.setState({isLoading: false});
        });
      }
    }else{
      throw resultJson.error;
    }
  } catch(error){
    if(this.state.view==='ADDRESS_NEEDED'){
      this.setState({view: 'WE_FAILED'}, ()=>{
        this.setState({isLoading: false});
      })
    }else{
      this.setState({isLoading: false, error:`Hmm that doesn't look right! Please check for any errors.`});
      console.log('ERROR CAUGHT: ', error);
    }
  }
}
