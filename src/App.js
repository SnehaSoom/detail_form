import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { setName, setEmail, setDob, setContact } from './features/form/formSlice';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FormPreview from './components/FormPreview';
import Footer from './components/Footer'
import './App.css';

const App = () => {
  const [selectedForm, setSelectedForm] = useState('details');
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const isFormValid = useSelector((state) => state.form.isFormValid);

  const handleFormSelection = (form) => {
    setSelectedForm(form);
    setCurrentStep(1)
  };

    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        dispatch(setName(value));
        break;
      case 'email':
        dispatch(setEmail(value));
        break;
      case 'dob':
        dispatch(setDob(value));
        break;
      case 'contact':
        dispatch(setContact(value));
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    if (isFormValid) {
      setCurrentStep((prevStep) => prevStep + 1);
      if(currentStep == 1){
        setSelectedForm('document')
      }
      if(currentStep == 2){
        setSelectedForm('statement')
      }
      if(currentStep == 3){
        setSelectedForm('interview')
      }
      console.log('Moving to the next step...', selectedForm);
    }
  };
  

  return (
    <Provider store={store}>
      <div className="app">
        <Header currentStep={currentStep} />
        <div className="main-content">
          <div className="left-panel">
            <Navigation selectedTemplate={selectedForm} onSelect={handleFormSelection} />
          </div>
          <div className="right-panel">
            <FormPreview formName={selectedForm} onInputChange={handleInputChange} formData={formData}/>
          </div>
        </div>
        <Footer onNext={handleNext} isFormValid={isFormValid} />
      </div>
    </Provider>
  );
};

export default App;
