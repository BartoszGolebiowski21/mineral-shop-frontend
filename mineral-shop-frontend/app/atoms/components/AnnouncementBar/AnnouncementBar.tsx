import Link from 'next/link'

const AnnouncementBar = () => {
  return (
    <div className='announcement-bar'>
      <p>TA STRONA JEST W BUDOWIE - SKLEP JESZCZE NIE DZIAŁA.</p>
      <p>
        PÓKI CO BIŻUTERIĘ MOŻESZ KUPIĆ TUTAJ:
        <Link href='https://www.vinted.pl/member/316530096' target="_blank">
          <b> KLIK</b> 
        </Link>
      </p>
    </div>
  )
}

export default AnnouncementBar