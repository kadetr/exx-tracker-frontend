import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export interface PaginateProps {
    pages: number,
    page: number
}

const styles = {
    pages: {
      display: "flex",
      justifyContent: "flex-end",
      color: "#000000",
      listStyleType: "none",
      margin: 0,
    },
    page:{
        padding: "5px",
        color: "#000000",
        fontSize: "20px"
    }
  } as const;

const Paginate: React.FC<PaginateProps> = ({pages, page}: PaginateProps) => {

  return (
    <>
    {pages > 1 ? (
      <Pagination size="sm" style={styles.pages}>
        {Array.from(Array(pages).keys()).map((x: number) => (
          <LinkContainer
            key={x + 1}
            to={`/history/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page} activeLabel=""><span style={styles.page}>{x + 1}</span></Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
    : (<div></div>)}
    </>
  )
}

export default Paginate;