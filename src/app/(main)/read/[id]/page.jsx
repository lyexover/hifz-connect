import Reader from "@/app/components/read/Reader";
import styles from "@/app/components/css-modules/read.module.css"


export default async function ReadPage({ params }) {

    const { id } = await params;
    let firstPage, lastPage = null; // Valeur par défaut au cas où la requête échoue
    let data = null; // Valeur par défaut au cas où la requête échoue

  try {
       const response = await fetch(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
       if (!response.ok){
              throw new Error('Network response was not ok')
       }
       data = await response.json()
       firstPage = data.data.ayahs[0].page // la page du premier verset
       lastPage = data.data.ayahs[data.data.ayahs.length - 1].page // la page du dernier verset
  }
  catch (error) {
       console.error('Error fetching data:', error)
  }


 
  return (
    <Reader surah={data.data} firstPage={firstPage} lastPage={lastPage} />
  );
}