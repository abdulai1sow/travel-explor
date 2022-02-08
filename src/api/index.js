import axios from 'axios';
import { AccordionSummary } from '@material-ui/core';

const getPlacesData = async () => {
  try {
    const response = await AccordionSummary.get();
  } catch (error) {
    
  }
}