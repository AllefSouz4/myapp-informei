import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({servico}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const enviarAgendamento = () => {



    const form = {
      id_servico: servico,
      nome,
      email,
      celular,
      dataAgendada: dataServico
    }


    // agendamentoService.save(form).then().cacth()
  }

  const [dataServico, setDataAgendamento] = useState(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')

//Criar Fromulario para pegar Nome, email e contato
  return (
    <Fragment className= 'Modalfilho'>
      <Button onClick={handleOpen}>Confirmar Agendamento </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1000, height: 500, }}>
          <h2 id="child-modal-title">Escolha o dia</h2>
          <p id="child-modal-description">
            Dia a escolher.
          </p>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={dataServico} onChange={(newValue) => {console.log(newValue);setDataAgendamento(newValue)}} />
          </LocalizationProvider>


          

          <Button onClick={handleClose}>Confirmar Agendamento </Button>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = useState(false);
  const [servico, setServico] = useState(0)
 
 

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const servicos = [
    {
      titulo: 'Barba',
      preco: 'R$12,50',
      id: 1
    },
    {
      titulo: 'Degradê',
      preco: 'R$40,00',
      id: 2
    }
  ]

  return (
    <div className='ModalPai'>
      <Button onClick={handleOpen}>Agendamento </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000, height: 500, }}>
          <section>
            {servicos.map((item) =>

              <div key={item.id} >
                <h2 id="parent-modal-title">{item.titulo}</h2>
                <p id="parent-modal-description">
                  Valor {item.preco}
                </p>
                <button onClick={()=> setServico(item.id)}>Selecionar serviço</button>
              </div>
            )}

          </section>
          <ChildModal servico={servico}/>
        </Box>
      </Modal>
    </div>
  );
}
