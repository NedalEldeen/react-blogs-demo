import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import style from './BlogCard.module.scss';

export default ({ blog, onClick }) => {
  const {
    title, image, tags, published_at: publishedAt
  } = blog;
  return (
    <Card className={style['blog-card']} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          className="blog-image"
          image={image}
          title={title}
          />
        <CardContent>
          <div className="info">
            <span className="date">{new Date(publishedAt).toDateString()}</span>
            <span className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
            <ArrowForwardIosIcon fontSize="small" className="forward-icon" />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
