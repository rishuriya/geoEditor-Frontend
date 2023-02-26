import React, { useEffect } from 'react'
import LeftComponent from './leftComponent'
import TableComponent from './tableComponent'


export default function GeoLocator() {

  // let api_url = 'http://127.0.0.1:8000/api/getGeoData/?wiki=All&year=2023&country=India'
  let api_url = 'http://127.0.0.1:8000/api/'

  const [wiki, setWiki] = React.useState('All')
  const [year, setYear] = React.useState('All')
  const [country, setCountry] = React.useState('All')

  const [wikiList, setWikiList] = React.useState([])
  const [yearList, setYearList] = React.useState([])
  const [countryList, setCountryList] = React.useState([])
  const [data, setData] = React.useState([])

  useEffect(() => {
    console.log('useEffect1')
    fetchList()
  },[])

  useEffect(() => {
    console.log('useEffect2')
    fetchData()
  }, [wiki, year, country])

  const fetchData = async () => {
    const param =  "getGeoData/?wiki=" + wiki + "&year=" + year + "&country=" + country;
    const fetch_url = api_url + param;
    // console.log("fetch_url",fetch_url)
    const response = await fetch(fetch_url)
    const data = await response.json()
    // console.log("Data",data)
    setData(data)
  }

  const fetchList = async () => {
    const param =  "getParamList/";
    const fetch_url = api_url + param
    const response = await fetch(fetch_url)
    const data = await response.json()
    console.log("List data",data)
    setWikiList(data[0].wikiList)
    setYearList(data[0].yearList)
    setCountryList(data[0].countryList)
  }

  const leftProps = {
    wikiList: wikiList,
    yearList: yearList,
    countryList: countryList,
    setWiki: setWiki,
    setYear: setYear,
    setCountry: setCountry,
    wiki: wiki,
    year: year,
    country: country,
  }
  
  return (
    <div className='flex flex-col space-y-5'>
      <LeftComponent leftProps={leftProps}/>
      <TableComponent data={data}/>
    </div>
  )
}

