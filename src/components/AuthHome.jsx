import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import TemplateCard from './TemplateCard';
import Spinner from './Spinner';
const Assign_web_id = 'http://127.0.0.1:8000/api/assign?Token=';
const Draft_API_Address = 'http://127.0.0.1:8000/api/draft/';

const AuthHome = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${Assign_web_id}${localStorage.getItem('Token')}`);
        if (Array.isArray(data)) {
          setList(data);
        } else {
          setList([data]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner/>
      ) : list.length === 0 ? (
        <p>No templates found.</p>
      ) : (
        <>
          <h1 className="m-2 pt-4 pb-4 text-xxl text-center">Template</h1>
          <h3 className="m-2 pt-4 pb-4 text-xxl text-center">Choose any template and use.</h3>
          <Row className="row flex-wrap overflow-auto p-3">
            {list.map((webData,val) => (
              <TemplateCard
                key={webData.Website_id}
                Web_link={webData.Web_Link}
                Cluster_Db={webData.Cluster_Db}
              />
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default AuthHome;
