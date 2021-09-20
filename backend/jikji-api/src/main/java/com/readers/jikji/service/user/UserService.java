package com.readers.jikji.service.user;

import com.readers.jikji.domain.user.Authority;
import com.readers.jikji.domain.user.EmailNotification;
import com.readers.jikji.domain.user.User;
import com.readers.jikji.repository.user.AuthorityRepository;
import com.readers.jikji.repository.user.EmailNotificationRepository;
import com.readers.jikji.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;
    private final EmailNotificationRepository emailNotificationRepository;

    @Transactional
    public User save(User user){
        return userRepository.save(user);
    }

    @Transactional
    public Authority save(Authority authority) {
        return authorityRepository.save(authority);
    }

    @Transactional
    public EmailNotification save(EmailNotification emailNotification) {
        return emailNotificationRepository.save(emailNotification);
    }

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }

}
