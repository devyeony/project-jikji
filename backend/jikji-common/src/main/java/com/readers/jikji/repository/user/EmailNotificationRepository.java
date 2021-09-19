package com.readers.jikji.repository.user;

import com.readers.jikji.domain.user.EmailNotification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailNotificationRepository  extends JpaRepository<EmailNotification, Long> {

}
