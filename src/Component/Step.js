import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


       
    
 
const steps = [
  {
    label: '충분한 숙면 ',
    description: `충분한 숙면을 취했나요? 운동하기 전 6-8시간 정도의 숙면이 필요합니다. `,
  },
  {
    label: '간단한 식사',
    description:
      '운동진행 30분전 간단한 식사를 통해서 몸의 신진대사를 올려야 합니다. ',
  },
  {
    label: '충분한 시간 ',
    description: `운동하는 시간이 여유로운지 체크해야합니다. 운동을 함으로 다른 일에 지장이 있는지 확인하세요.`,
  },
  {
    label: '운동 준비물',
    description: `헬스를 가기전 필요한 구성품을 모두 챙겼는지 확인합니다.(커피 or 부스터, 스트랩, 붕대, 헬스화)`,
  }, 
];


export default function VerticalLinearStepper() {

  

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
 


  return (
    <Box sx={{ maxWidth: 1200 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                 </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}