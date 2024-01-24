import fetchJsonp from 'fetch-jsonp';

const useFetch = async (url, type= 'normal' | 'jsonp') => {
  try {
    const response =
      type === 'normal' ? await fetch(url, { mode: 'no-cors',  headers: {
        'Access-Control-Allow-Origin':'*'
      } }) : await fetchJsonp(url);

    if (response.ok) {
      const fixedResponse = await response.json();
        console.log('useFecht' + fixedResponse);
      return {
        error: false,
        data: fixedResponse,
      };
    }

    return {
      error: true,
      message: 'Invalid address',
    };
  } catch {
    return {
      error: true,
      message: 'Invalid address',
    };
  }
};

export default useFetch;
