import './App.css';
import { useState } from 'react';

function App () {

  const [selected, setSelected] = useState(null)
  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>
      <div className='wrapper'>
        <div className='accordion'>
          {/* MAPEANDO OS DADOS   MAPEANDO OS DADOS   MAPEANDO OS DADOS */}
          {data.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className='item'>
              <div className='title'  onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                {/* *** VAMOS ALTERNAR O BOTÃO +/- *** */}
                <span>{selected===i ? '-' : '+'}</span>
              </div>
              <div className='content'>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
const data = [
  {
    question: 'Question 1',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nibh  augue, dignissim convallis dolor rutrum ut. Nunc et finibus leo, in varius tortor. Pellentesque vel justo eget tortor volutpat bibendum. Nulla id cursus tellus, ac pulvinar elit. Aenean id mauris a dui egestas vehicula eu id ex. Fusce accumsan, diam vitae euismod commodo, ligula magna lacinia arcu, ac elementum tellus turpis id leo. Nunc et est tempor sapien consequat.'
  },
  {
    question: 'Question 2',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nibh augue, dignissim convallis dolor rutrum ut. Nunc et finibus leo, in varius tortor.  Pellentesque vel justo eget tortor volutpat bibendum. Nulla id cursus tellus, ac  pulvinar elit. Aenean id mauris a dui egestas vehicula eu id ex. Fusce accumsan, diam vitae euismod commodo, ligula magna lacinia arcu, ac elementum tellus turpis id leo. Nunc et est tempor sapien consequat.'
  },
  {
    question: 'Question 3',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nibh augue, dignissim convallis dolor rutrum ut. Nunc et finibus leo, in varius tortor.  Pellentesque vel justo eget tortor volutpat bibendum. Nulla id cursus tellus, ac  pulvinar elit. Aenean id mauris a dui egestas vehicula eu id ex. Fusce accumsan, diam vitae euismod commodo, ligula magna lacinia arcu, ac elementum tellus turpis id leo. Nunc et est tempor sapien consequat.'
  },
  {
    question: 'Question 4',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nibh augue, dignissim convallis dolor rutrum ut. Nunc et finibus leo, in varius tortor.  Pellentesque vel justo eget tortor volutpat bibendum. Nulla id cursus tellus, ac  pulvinar elit. Aenean id mauris a dui egestas vehicula eu id ex. Fusce accumsan, diam vitae euismod commodo, ligula magna lacinia arcu, ac elementum tellus turpis id leo. Nunc et est tempor sapien consequat.'
  }
]
export default App
